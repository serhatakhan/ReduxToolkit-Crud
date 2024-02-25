import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // bütün inputlardaki değerlerden bir NESNE oluştur,
    //* tüm inputlardaki değerleri almak için önce tüm inputlara "name" değeri vermek gerek
    //1) önce FormData classından örnek oluşturuyoruz.
    const formData = new FormData(e.target);

    //2) sonra formdaki inputların verisini önce diziye(.entries() ile) sonra nesneye(Object.fromEntries() ile) çevirir
    const task = Object.fromEntries(formData.entries());

    // GÜNCELLENECEK ELEMAN VARSA
    if(editItem){
      // addTask, id'yi kendisi ekliyor, editTask ise aksiyonun payloadı içindeki id'yi kullanıyor
      // yani bu şu demek: editTask'a payload olarak id'yi de eklememiz lazım..
      dispatch(editTask({id: editItem.id, ...task}))
    } else {
      // GÜNCELLENECEK ELEMAN YOKSA
      //3) reducer'a veri ekleneceğini haber ver,eklemek istediğimiz veriyi-task-
      //aksiyona payload olarak ekledik. YANİ BURADA PAYLOAD, TASK OLUYOR
      dispatch(addTask(task));
    }

    // modali kapat
    handleClose();
  };


  // 2 İHTİMAL VAR: YA DÜZENLENECEK ELEMAN YOKTUR VE GÖREV EKLEME MODUNDAYIZDIR,
  // YA DA DÜZENLENECEK ELEMAN VARDIR VE O ZAMAN DA GÜNCELLEME MODUNDAYIZDIR. BUNA GÖRE FORMU
  // DÜZENLEYECEĞİZ..
  return (
    <Modal className="text-black" show={isOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>

      {/* form gönderildiği zaman formdaki inputların tüm bilgilerini almak istiyoruz,
      bundan dolayı tüm inputlara name değerini verdik */}
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <FormGroup>
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              name="title"
              type="text"
              placeholder="ör: navbarı düzenle"
              required
            />
          </FormGroup>
          {/* defaultValue={editItem?.title} --> bunu eklememizin sebebi, 1) düzenle modalı açıldığında düzenlenecek bilgilerin içinde yazılı halde gelmesini istiyoruz. 
          2) niye ? koyduk çünkü editItem'ı siliyoruz ya crudPage'ten buraya prop yollarken. olmayadabilir. o yüzden ? ile varsa dedik. */}

          <FormGroup>
            <Form.Label>İsminiz</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              name="author"
              type="text"
              placeholder="ör: ahmet"
              required
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Oluşturan</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              name="assigned_to"
              type="text"
              placeholder="ör: mehmet"
              required
            />
          </FormGroup>

          <FormGroup>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              name="end_date"
              type="date"
              required
            />
          </FormGroup>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? "Güncelle" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
