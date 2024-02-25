/*
 * Hem reducerları hem aksiyonları
 farklı bir dosyada oluşturmak yerine 
 createSlice metodu yardımıyla tek bir noktada tanımlayacağız. 

 ? Slice oluşturma:
 * import { createSlice }
 * gerekli parametreleri tanımla
 -- name: slice ismi > string
 -- initialState: başlangıç state'i > object (genelde. ama obje olması kesinlikle zorunlu DEĞİL)
 -- reducers: aksiyonların görevlerini tanımladığımız fonksiyonlar

 */
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {count: 0, isDarkTheme: true},
    // state'in nasıl değişeceğine karar veren fonksiyonlar, bunların her biri birer aksiyon, yanlarına o aksşyon devreye girdiği zaman çalşacak fonksiyonu yazıyoruz.
    reducers: {
        increase: (state)=>{
            state.count++
            // return {...state, count: state.count+1} redux'ta böyle yapıyorduk artık toolkit diğerinin(isDarkTheme) değişmediğini anlıyor. artık böyle yazmamıza gerek kalmıyor.
        },
        decrease: (state)=>{
            state.count--
        },
        setCount: (state, action)=>{
            // göndereceğimiz payload'a göre ayarlama yapacak. DİĞERLERİNDE action KULLANMAMIZA GEREK YOKTU O YÜZDEN ALMADIK
            state.count=action.payload
        },
        toggleTheme: (state)=>{
            // isDarkTheme, var olan değerinin tam tersi olsun istedik
            state.isDarkTheme = !state.isDarkTheme
        }
    }
})

// counterSlice'ın oluşturduğu reducer'ı store'da kullanmak için export et
export default counterSlice.reducer

// counterSlice'ın kendisinin oluşturduğu içindeki aksiyon fonksiyonlarını(increase, decrease, setCount) bileşenlerde kullanmak için export et
export const {decrease, increase, setCount, toggleTheme} = counterSlice.actions

//** */ ŞİMDİ BİZİM REDUCERLARI STORE SAYFASINDA, AKSİYONLARI COUNTER.JSX DE KULLANMAMIZ LAZIM.
//** */ REDUCER'I STORE'DA KULLANABİLMEK İÇİN COUNTERSLİCE'IN İÇİNDEN GELEN, SLİCE YAPISININ
// KENDİSİNİN OLUŞTURDUĞU reducer'ı ÇAĞIRIP İMPORT ETTİK. aynı şeyi actionslar için de yaptık
//** */ BU, BİZİM YAZDIĞIMIZ BİR ŞEY DEĞİL !!