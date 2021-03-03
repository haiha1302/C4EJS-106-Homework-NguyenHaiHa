/*
    Tạo ra một danh sách các bạn trong lớp
    Hỏi người dùng muốn thao tác (C, R, U, D)
    Nếu người dùng chọn "C" => Hỏi thêm học sinh nào => Thêm vào danh sách
    Nếu người dùng chọn "R" => Hỏi muốn xem học sinh ở vị trí bao nhiêu 
                            => alert tên của học sinh ở vị trí đó
    Nếu chọn "U" => Hỏi xem muốn update học sinh ở vị trí bao nhiêu
                => Thay đổi học sinh ở vị trí tương ứng  
    Nếu chọn "D" => Hỏi xem muốn xóa học sinh ở vị trí bao nhiêu
                => Xóa học sinh ở vị trí tương ứng
    Nếu chọn "Q" => Thoát chương trình và in ra danh sách lớp
*/ 

let arr = ["Hải Hà", "Sỹ Hiển", "Thế Đạt"];
while (true)
{
    let thaotac = prompt("Bạn muốn thao tác gì: C/R/U/D ");
    if(thaotac == "C")
    {
        let addStudent = prompt("Bạn muốn thêm học sinh nào? ");
        arr.push(addStudent);
    }
    else if(thaotac == "R")
    {
        let read = prompt("Bạn muốn xem học sinh ở vị trí nào? ");
        alert(arr[read]);
    }
    else if(thaotac == "D")
    {
        let del = prompt("Bạn muốn xóa học sinh ở vị trí nào? ");
        delete arr[del];
    }
    else
    {
        console.log(arr);
        break;
    }
}