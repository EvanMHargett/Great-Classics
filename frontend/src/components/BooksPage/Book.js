import './BooksPage.css'

export default function Book({book}){
    
    
    

    return (
        <>

            <img src={'/' + book.coverLink} alt='' className="cover pure-img"></img>
            
        </>
    )
}