import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import 'dayjs/locale/id.js';

dayjs.locale('id');

dayjs.extend(duration);

export default function handler(req, res) {
    const { tanggal } = req.query;

    if (!tanggal) {
        return res.status(400).json({ error: "parameter 'tanggal' wajib format(YYYY-MM-DD)" });
    }

    const birth = dayjs(tanggal);
    if (!birth.isValid()) {
        return res.status(400).json({ error: 'format tanggal tidak valid gunakan YYYY-MM-DD' });
    }

    const now = dayjs();
    const umurTahun = now.diff(birth, "year");
    const umurBulan = now.diff(birth.add(umurTahun, "year"), "month");
    const umurHari = now.diff(birth.add(umurTahun, "year").add(umurBulan, "month"), "day");

    let kategori = "";
    if (umurTahun < 13) kategori = "anak anak";
    else if (umurTahun < 18) kategori = "remaja";
    else if (umurTahun < 35) kategori = "dewasa";
    else if (umurTahun < 60) kategori = "paruh baya";
    else kategori = "lansia";

    const hariLahir = birth.locale('id').format('dddd');

    return res.status(200).json({
        umurTahun,
        umurBulan,
        umurHari,
        kategori,
        hariLahir,
    });
}