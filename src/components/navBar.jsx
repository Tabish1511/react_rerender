export function NavBar({onHandleClick}){

    console.log('NavBar LOG');

    return(
        <div className="border-solid border-2 border-red-500">
        <h1 className="text-3xl">NavBar</h1>
        <button onClick={onHandleClick}>Click me</button>
        </div>
    )
}