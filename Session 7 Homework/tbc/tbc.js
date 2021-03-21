function average(array) {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    let tbc = sum / array.length;
    return tbc;
}
// tạo array chứa điểm
let diem = [1, 2, 3, 4, 5, 6, 10];

// tạo biến tinhToan để chạy function average lấy dữ liệu trong array diem, lấy 2 chữ số sau dấu ','
let tinhToan = average(diem).toFixed(2);

console.log(`Điểm Trung Bình Cộng là: ${tinhToan}`);

if (tinhToan < 5) {
    alert(`Học sinh Trung bình`);
} 
else if(tinhToan <= 6.5) {
    alert(`Học sinh Khá`);
}
else {
    alert(`Học sinh Giỏi`);
}
