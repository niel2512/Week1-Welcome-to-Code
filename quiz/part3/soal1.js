// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let counter = 0;
while (counter < 20) {
  counter += 1;
  console.log("LOOPING PERTAMA " + counter);
  counter++;
}
while (counter > 0) {
  counter -= 1;
  console.log("LOOPING KEDUA " + counter);
  counter--;
}
