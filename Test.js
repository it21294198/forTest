let M =[
        [ 1, 2, 3, 4,5],
        [ 6, 7, 8, 9,10], 
        [11,12,13,14,15],
        [16,17,18,19,20]
    ]

    console.log(M[0].length)
    console.log(M.length+'\n')
function spiralPrint(){
    let topLeft = 0,
        topRight = M[0].length -1,
        bottomRight = M.length - 1,
        bottomLeft = 0;

//while()
        //go right
        for(let i=topLeft;i<topRight;i++){
            console.log(M[topLeft][i])
        }
        //go down
        for(let i=bottomLeft;i<=bottomRight;i++){
            console.log(M[i][topRight])
        }
        topRight--
        bottomLeft++
        //go left
        for(let i=bottomRight;i>=0;i--){
            console.log(M[bottomRight][i])
        }
        bottomRight--
        //go up
        for(let i=bottomRight;i>0;i--){
            console.log(M[i][topLeft])
        }
        topLeft++
      ///////////////////////// 
        //go right
        for(let i=topLeft;i<topRight;i++){
            console.log(M[topLeft][i])
        }
        //go down
        console.log('fskjsl')
        for(let i=bottomLeft;i<=bottomRight;i++){
            console.log(M[i][topRight])
        }
        topRight--
        bottomLeft++
        
        console.log('fjlfs')
        //go left
        for(let i=bottomRight;i>0;i--){
            console.log(M[bottomRight][i])
        }
}

spiralPrint();
