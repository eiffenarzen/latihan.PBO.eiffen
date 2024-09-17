// Mendefinisikan Kelas
class Bola {
    constructor(nama, nomor) {
        this.nama = nama;
        this.nomor = nomor;
    }

    // Metode
    lari() {
        console.log(`${this.nama} bernomor punggung ${this.nomor} sedang berjalan.`);
    }
}

// Pewarisan
class PemainBola extends Bola {
    constructor(nama, nomor, kecepatanMaksimal) {
        super(nama, nomor); // Memanggil konstruktor kelas induk
        this.kecepatanMaksimal = kecepatanMaksimal;
    }

    // Overriding Metode
    lari() {
        console.log(`${this.nama} bernomor punggung ${this.warna} berjalan dengan kecepatan maksimal ${this.kecepatanMaksimal} km/jam.`);
    }
}

// Membuat Objek
const bola1 = new Bola('Messi', 'sepuluh');
bola1.lari();

const pemainbola1 = new PemainBola('Ronaldo', 'tujuh', 1000);
pemainbola1.lari();