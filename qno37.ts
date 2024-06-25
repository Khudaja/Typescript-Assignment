// Large Shirts: Modify the make_shirt() function so that shirts are large by
//  default with a message that reads I love TypeScript. Make a large shirt and
//  a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string ='large' , message:string='I love TYPESCRIPT' ){
    console.log(`The size of the shirt is "${size}" and the message printed on it is "${message}"`)
}
make_shirt('medium')
make_shirt('small','GIAIC')
make_shirt()