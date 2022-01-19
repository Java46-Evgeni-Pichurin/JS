console.log(`\nTask 1:`);
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
const left = arHw.filter((a) => a % 2 == 0).sort((a,b) => a - b);
const right = arHw.filter((a) => a % 2 != 0).sort((a,b) => b - a);
arHw.splice(0, arHw.length, left.concat(right));
console.log(`Sorted array arHw is [${arHw}]\n`);

console.log(`Task 2:`);
function displayMatrix(matrix) {
     for (let i = 0; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < matrix[i].length; j++) {
            row = row + matrix[i][j] + '   '
        }
        console.log(row);
     }  
}
function matrixTransp(matrix){
    let transposeMatrix = [];
    let rows, columns;
    for(let i = 0; i < matrix.length; i++){
        rows = matrix.length;
        for (let j = 0; j < matrix[i].length; j++) {
            columns = matrix[i].length;
        }
    };
    for (let i = 0; i < Math.max(rows,columns); i++) {
        transposeMatrix.push([]);
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            transposeMatrix[j].push(matrix[i][j]);
        };
    };
    return transposeMatrix;
}

const matrix1 = [[11, 10, 20, 30], [12, 50, -5, 20], [13, 14, 34, 28]];
console.log(`${displayMatrix(matrix1)} \nTransposed matrix:\n`);
console.log(`${displayMatrix(matrixTransp(matrix1))}`)