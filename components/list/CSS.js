export default `
.container{
    display: grid;
    align-items: flex-start;
    justify-items: center;
    gap: 4px;
    font-family: "Roboto";
    
    padding: 8px;
    
}
.container > *{
    color: #333;
}
.header{
    padding: 8px;
    margin-bottom: 0px;
}
.row{
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 2px 8px;
    
    border-radius: 3px;
    cursor: pointer;
    border: #e0e0e0 1px solid;
}
.row:hover{
    background: #f0f0f0;
}
.row:active{
    background: #f0f0f0;
    border-color: #0095ff;
}
.empty{
    width: 100%;
    height: 40px;
    background: #f4f5fa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .85rem;
    font-weight: 550;
    color: #555;
}
.key{
    display: grid;
    gap: 4px;
    width: 100%;
}
`