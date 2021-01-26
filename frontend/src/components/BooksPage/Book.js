

export default function Book({book}){
    
    
    

    return (
        <>
            <div> Title: {book.title}</div>
            <div> Author: {book.author}</div>
            <img src={'/' + book.coverLink} alt=''></img>
        </>
    )
}