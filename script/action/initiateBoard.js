export default (boardModel) => {
    let parent = document.createElement("DIV")
    parent.classList.add("board")
    document.body.appendChild(parent)
    for (let row in boardModel.elements) {
        let div = document.createElement('DIV')
        div.classList.add("row")
        parent.appendChild(div)

        for (let col in boardModel.elements[row]) {
            let tile = document.createElement('div')
            tile.classList.add("tile")
            tile.dataset.row = row
            tile.dataset.col = col
            tile.classList.add(`row-${row}`)
            tile.classList.add(`col-${col}`)
            div.appendChild(tile)
        }
    }
}