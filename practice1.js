tasks=prompt('Write the number of tasks that you completed: ')
function resultado(){
if (tasks <= 6 && tasks >= 0)
console.log("**Failed**")
else if (tasks > 6 && tasks <= 9)
console.log("**Insufficient")
else if (tasks > 9 && tasks <= 14)
console.log("**Good**")
else if (tasks == 15)
console.log("**Excellent**")
else if (tasks > 15 || tasks < 0)
console.log("**Error**")
}
resultado();