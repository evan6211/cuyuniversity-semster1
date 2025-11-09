export default function handler(req, res) {
    const { length } = req.query;

    const panjang = parseInt(length) || 8;
    if (panjang < 4 || panjang > 64) {
        return res.status(400).json({
            error: "panjang harus 4 sampai 64 karakter."
        });
    }

    const hurufKecil = "abcdefghijklmnopqrstufwxyz";
    const hurufBesar = "ABCDEFGHIJKLMNOPQRSTUFWXYZ";
    const angka = "0123456789";
    const simbol = "!@#$%^&*()_+[]{}<>?:;\"',./|\\`~";
    const semuaKarakter = hurufKecil + hurufBesar + angka + simbol;

    let password = "";
    for (let i = 0; i < panjang; i++) {
        const randomIndex = Math.floor(Math.random() * semuaKarakter.length);
        password += semuaKarakter[randomIndex];
    }

    return res.status(200).json({
        password,
        panjang
    });
}