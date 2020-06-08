interface UserSD{
    nickname : string;
    age : number;
    gender:string;
    avatar:string;
    grade?:string;
}

type NullableStr = string | null;
let username : NullableStr = "";
username = null;
type PartialUser = Partial<UserSD>;
type KeyofUser = keyof UserSD;
type MyPartial<T> = {[P in keyof T] ?: T[P] | undefined };
function updateUser(dto:PartialUser)
{
    if (dto.nickname){

    }
}
let inputValue: string | number = 3;
inputValue = "this sis";

function server():never{
    while(true){}
}

