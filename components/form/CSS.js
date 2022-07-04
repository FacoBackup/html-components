export default `
.container{
    display: grid;
    align-items: flex-start;
    justify-items: center;
    gap: 4px;
    font-family: "Roboto";
    
    padding: 8px;
    
    display: flex;
    flex-flow: wrap;
    gap: 8px;
    width: 100%;
}
.container > *{
    color: #333;
}
.header{
    padding: 8px;
    margin-bottom: 0px;
}
.label{

}
.input{
    width: 100%;
    outline: none;
    border: #e0e0e0 2px solid;
    border-radius: 3px;
    height: 35px;
    font-size: .9rem;
}
.input[type="checkbox"]{
    width: 15px;
    height: 15px;
}
.input:focus{
    border-color: #0095ff;
}
.input-container{
    display: grid;
    gap: 4px;
    font-size: .8rem;
    
    width: 100%;
}
.submit{
    background: #0095ff;
    border: none;
    outline: none;
    color: white;
    cursor:pointer;
    font-size: .9rem;
    padding: 2px 16px;
    border-radius: 3px;
    
}
`