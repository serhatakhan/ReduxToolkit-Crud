# Redux Toolkit

- Klasik redux'a göre daha az kod yazarak aynı sonucu elde edebiliyoruz.

- Dahili olarak thunk içerisinde gelir. 

- Devtools eklentisi sayesinde proje geliştirirken store'u, reducer'ları, çalıştırılan aksiyonları izleyebiliyoruz.

- Proje içerisinde state'i yönetmek bizim için daha kolay olacak.


# Kurulum

- npm i @reduxjs/toolkit
- npm i react-redux

- sonrasında store'u ve reducer'ları oluştur.


# Slice

- - > Redux Toolkit'in içerisinde yer alan tek bir noktada, hem reducer hem de action tanımlamamızı sağlayan yapıdır. 

- - > Klasik redux'ta aksiyonları ayrı, reducer'ları ayrı dosyalarda tanımlıyorduk. Toolkit ile
birlikte `Slice` içerisinde ikisinide tek noktada fazla kod yazmadan tanımlayabiliyoruz.