import './BooksPage.css'

export default function Book({book}){
    
    
    

    return (
        <>

            <img src={'/' + book.coverLink} alt='' class="cover pure-img"></img>
            
        </>
    )
}