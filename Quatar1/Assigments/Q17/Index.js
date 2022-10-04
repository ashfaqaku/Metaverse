var guest_name=["anwer","akbar","ali"];
console.log('Hello!  '+guest_name[0]+ ', I would like to invite you on Saturday for dinner. ');
console.log('Hello!  '+guest_name[1]+ ', I would like to invite you on Saturday for dinner. ');
console.log('Hello!  '+guest_name[2]+ ', I would like to invite you on Saturday for dinner. ');
 
console.log('before apologized ');
console.log(guest_name[1]+ ',  has apologised to attend the dinner. ');
guest_name[1]='ashraf';
console.log('after update name  ');
console.log('Hello!  '+guest_name[0]+ ', I would like to invite you on Saturday for dinner. ');
console.log('Hello!  '+guest_name[1]+ ', I would like to invite you on Saturday for dinner. ');
console.log('Hello!  '+guest_name[2]+ ', I would like to invite you on Saturday for dinner. ');
 
console.log('before adding at the beginning');
//add at beginning
guest_name.unshift("abdullah");
 
//add at middle
guest_name.splice(2,0,"middle name");
 
//add at end
 
guest_name.push('mustafa');
 
for (i =0;i<guest_name.length;i++)
{console.log('Hello!  '+guest_name[i]+ ', I would like to invite you on Saturday for dinner. ');
}
console.log("we can invite only two people for dinner."  + guest_name.length);
while ((guest_name.length)!=2)
{
    console.log('Hello!  '+guest_name[0]+ ', I would like to inform you that Saturday dinner party  is cancelled to some unexpected circumstances. ');
    guest_name.shift();
}
 
for (i =0;i<guest_name.length;i++)
{
    console.log('Hello!  '+guest_name[i]+ ', you\'r still invited on Saturday for dinner. ');
}
while ((guest_name.length)!=0)
{
    guest_name.shift();
}
 
console.log(guest_name[i]);
 
 
 
