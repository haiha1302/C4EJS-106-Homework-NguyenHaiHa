function average(...others) {
    let sum = 0;
    for(let item of others) {
        sum += item;
    }
    let tbc = sum / others.length;
    console.log(`Điểm trung bình cộng là: ${tbc}`);
    if(tbc < 3) {
        alert(`Học sinh Yếu`);
    }
    else if (tbc < 5) {
        alert(`Học sinh Trung bình`);
    } 
    else if(tbc <= 6.5) {
        alert(`Học sinh Khá`);
    }
    else {
        alert(`Học sinh Giỏi`);
    }
    return tbc;
}
average(8, 9, 10, 8.5, 9.25)

