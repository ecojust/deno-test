/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2020-08-24 16:44:41
# FilePath: /deno-test/src/main.js
# Description: 
#
============================================================================= */
import app from './app.ts'

document.body.style.cssText = `
background:red
`

app.init();
app.initModel();
function animate(){
    app.animate();
    requestAnimationFrame(animate);
}
animate();