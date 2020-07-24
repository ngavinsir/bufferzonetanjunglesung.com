module.exports = function formatRupiah(angka) {
    let number_string = (angka.toString()).replace(/[^,\d]/g, "").replace(/^0+/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah ? "Rp " + rupiah : "Rp 0";
}