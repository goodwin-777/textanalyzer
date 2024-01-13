function DataTable({word, config}){

    const renderedHeaders = config.map(header => {return <td key={header.label}>{header.label}</td>})
    const renderedRows = config.map(body => {return <td key={body.label}>{body.render(word)}</td>})

    return(
        <div className="w-50">
            <table className="table table-bordered">
                <tbody>
                    <tr>{renderedHeaders}</tr>
                </tbody>
                <tbody>
                    <tr>{renderedRows}</tr>
                </tbody>
            </table>
        </div>
    )
}
export default DataTable;