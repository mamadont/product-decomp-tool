drag(){
    const draggable = document.querySelectorAll(Card);
    const columns = document.querySelectorAll(Column);

    draggable.forEach(draggable, () => {
      draggable.addEventListener("dragstart", () => {
        console.log("Dragged");
      })
    });