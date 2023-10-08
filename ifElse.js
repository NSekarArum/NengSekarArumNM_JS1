//If, Else, nested If
    let nilai = 60;

    if (nilai > 70) {
        console.log("nilaimu aman")//if else;
    } else {
        console.log("nilaimu harus segera diperbaiki")//if else;
    }
    
    if (nilai >= 90) {
        console.log('Nilai Kamu Sangat Bagus')//nested if
    } else {
        if (nilai >= 80) {
            console.log('Nilai Kamu Bagus')//nested if
        } else {
            if (nilai >= 70) {
                console.log('Nilai Kamu Cukup Bagus')//nested if
            } else {
                if (nilai >= 60) {
                    console.log('Nilai Kamu Kurang Bagus')//nested if
                } else {
                    console.log('Kamu masih harus banyak belajar')//nested if
                }
            }
        }
    }
    