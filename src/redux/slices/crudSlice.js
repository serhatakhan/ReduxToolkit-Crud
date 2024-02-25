import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    tasks: [
        {
            "title": "Headerı Düzenle",
            "author": "Serhat",
            "assigned_to": "Ahmet",
            "end_date": "2024-03-01",
            "id": "834bfa5e-5277-4618-af9b-895b0c0fb9fb"
        },
        {
            "title": "Navbar Animasyonu",
            "author": "Ayşe",
            "assigned_to": "Veli",
            "end_date": "2024-03-05",
            "id": "9f005ff1-e2f5-45cf-a5de-33691ea54fc8"
        },
        {
            "title": "SEO Optimizasyonu",
            "author": "Ali",
            "assigned_to": "Ahmet",
            "end_date": "2024-03-10",
            "id": "307f06ab-bebd-4d3c-bbee-53933ae2eb58"
        }
    ]
}

const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
        addTask: (state, action)=>{
            // a) todo'ya id ekle (aksiyonun payloadı ile gelen elemana id ekle)
            action.payload.id = v4()

            // b) veriyi yukarıda tuttuğumuz tasks'lerin arasına ekle. push() ile DOĞRUDAN ekleme yapabiliyoruz.
            state.tasks.push(action.payload)
            // veriyi bu şekilde DOĞRUDAN değiştirebiliyorz. reduxta olsa return {...state, tasks: state.tasks.concat(action.paylaod)}
        },
        deleteTask: (state, action)=>{
            // id'si payload ile gelen elemanı diziden kaldır.
            //// 1.yöntem > filter()
            /** const filtred = state.tasks.filter((task)=> task.id !== action.payload)
            state.tasks = filtred **/

            //// 2.yöntem > splice() --> artık toolkit ile DOĞRUDAN değiştirebiliyoruz.
            // a) id'si bilinen elemanın sırasını bul
            const i = state.tasks.findIndex((item)=> item.id === action.payload)
            // b) diziden elemanı kaldır, (i'ninci sıradaki elemandan itibaren 1 tane sil)
            state.tasks.splice(i, 1)
        },
        editTask: (state, action)=>{
            //// güncel verilerine sahip olduğumuz elemanın dizideki halini güncelleme
            // 1.yöntem > map() // 2.yöntem > splice() yine
            // Klasik Redux'ta biz diziyi DOĞRUDAN GÜNCELLEYEMİYORUZ. TOOLKIT'TE İSE DOĞRUDAN
            // DİZİYİ GÜNCELLEYEBİLİYORUZ. splice() kullanacağız
            const index = state.tasks.findIndex((i)=> i.id === action.payload.id)

            // elemanı güncelle (3. değeri veriğimizde silinenin yerine ne koyacağını söylüyoruz)
            state.tasks.splice(index, 1, action.payload)
        }
    }
})

// reducer'ı store'a tanıtmak için export
export default crudSlice.reducer

// aksiyonları kullanmak için de export
export const {addTask, deleteTask, editTask} = crudSlice.actions