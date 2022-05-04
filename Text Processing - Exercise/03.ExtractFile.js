function solve(path){
    //  find last element of path (split by \\)
    let tokens = path.split('\\');
    let filename = tokens.pop();

    // split last element in two at final period
    let index = filename.lastIndexOf('.');
    let name = filename.substring(0,index);
    let ext = filename.substring(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Internal\\training-internal\\template.bak.pptx')