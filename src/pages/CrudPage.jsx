import { useState } from "react";
import { Button, ButtonGroup, Stack, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../component/FormModal";
import { deleteTask } from "../redux/slices/crudSlice";

const CrudPage = () => {
  const dispatch = useDispatch();

  const counterState = useSelector((store) => store.counterReducer);
  const crudState = useSelector((store) => store.crudReducer);

  // modal açık mı kapalı mı state'i
  const [isOpen, setIsOpen] = useState(false);

  // düzenlenecek eleman state'i
  const [editItem, setEditItem] = useState(null);
  console.log(editItem);

  return (
    <div className="p-3">
      {/* flex yapısı react-bootstrapte Stack componenti ile sağlanıyor */}
      {/* variant propu ile renk değiştirebiliyoruz */}
      <Stack className="align-items-end my-3">
        <Button onClick={() => setIsOpen(true)} variant="info">
          Yeni Görev Ekle
        </Button>
      </Stack>

      <Table
        striped
        hover
        bordered
        responsive
        variant={counterState.isDarkTheme ? "dark" : "light"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    variant="danger"
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setIsOpen(true);
                    }}>
                    Düzenle
                  </Button>
                </ButtonGroup>
                {/* hangi elemanı düzenleyeceğimizin bilgisini tutuyoruz setEditItem(task) ile. */}
                {/* daha sonra da modal açılsın diye setIsOpen(true)  */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal - tıklandığında açılacak */}
      {/* handleClose --> modal'ı kapatacak olan fonk. bunu prop olarak yolladık */}
      {/* {setIsOpen(false); setEditItem(null)} yaparak modal kapatıldığında düzenlenecek elemanı sildik. çünkü düzenleye bastıktan sonra tekrar yeni görev ekleye basılınca hala düzenle modunun seçenekleri görünüyordu modalda. */}
      <FormModal isOpen={isOpen} handleClose={() => {setIsOpen(false); setEditItem(null)}} editItem={editItem} />
      {/* editItem ile güncelenecek elemanın bilgilerini prop olarak yolla */}
    </div>
  );
};

export default CrudPage;
