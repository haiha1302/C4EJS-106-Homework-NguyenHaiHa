/*
    Tạo ra 1 danh sách các bạn trong lớp
    Hỏi người dùng muốn thao tác (C, R, U, D)
    Nếu người dùng chọn "C" => Hỏi thêm học sinh nào => Thêm vào danh sách
    Nếu người dùng chọn "R" => Hỏi muốn xem học sinh ở vị trí bao nhiêu
                            => alert tên của học sinh ở vị trí đó
    Nếu người dùng chon "U" => Hỏi xem muốn update học sinh ở vị trí bao nhiêu
                            => Thay đổi học sinh ở vị trí tương ứng
    Nếu người dùng chọn "D" => Hỏi xem muốn xóa học sinh ở vị trí bao nhiêu
                            => Xóa học sinh ở vị trí tương ứng
    Nếu chọn "Q" => Thoát chương trình và in ra danh sách lớp
*/

let arrName = ["Hải Hà", "Nigga", "Tú Anh", "Sỹ Hiển", "Đạt Cỏ"];
console.log(...arrName);
while(true)
{
    let input = prompt("Thao tác C/U/R/D ");
    if(input == "C" || input == "c")
    {
        let addStudent = prompt("Bạn muốn thêm học sinh nào ?");
        arrName.push(addStudent);
        console.log(arrName);
    }
    else if(input == "R" || input == "r")
    {
        let readStudent = prompt("Bạn muốn xem học sinh ở vị trí bao nhiêu ?");
        for(i = 0; i <= arrName.length; i++)
        {
            if(i == readStudent)
            {
                console.log(arrName[i - 1]);
            }
        }
    }
    else if(input == "U" || input == "u")
    {
        let updateStudent = prompt("Bạn muốn update học sinh ở vị trí bao nhiêu ?");
        let newStudent = prompt("Nhập tên học sinh mới ");
        for(a = 0; a <= arrName.length; a++)
        {
            if(a == updateStudent)
            {
                arrName[a - 1] = newStudent;
            }
        }
        console.log(arrName);
    }
    else if(input == "D" || input == "d")
    {
        let delStudent = prompt("Bạn muốn xóa học sinh ở vị trí bao nhiêu ?");
        arrName.splice(delStudent - 1, 1);
        console.log(arrName);
    }
    else
    {
        break;
    }
}