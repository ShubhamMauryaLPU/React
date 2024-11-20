import "./Table.css"
export default function Table({f,a,b,w}){
    return (
        <>
            <table frame={f} align={a} border={b} width={w} className="table" cellPadding="10px">
                <tr>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>D</td>
                    <td>E</td>
                    <td>F</td>
                </tr>
                <tr>
                    <td>I</td>
                    <td>J</td>
                    <td>K</td>
                </tr>
            </table>
        </>
    );
}