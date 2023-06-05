
const EachRow = ({ userData, index }) => {
    const { name, country, score, id, photo } = userData ?? {};
    return (
        <tr>
            <td className={`p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}`}>
                {id}
            </td>
            <td
                className={`flex justify-start items-center gap-2 p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-teal-50'
                    }`}>
                <div className='w-10 h-10 rounded-full border border-sky-200'>
                    <img
                        src={photo}
                        alt='profile'
                        width={40}
                        height={40}
                        className='rounded-full'
                    />
                </div>
            </td>
            <td className={`p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}`}>
                {name}
            </td>
            <td className={`p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}`}>
                {country}
            </td>
            <td className={`p-3 ${index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}`}>
                {score}
            </td>
        </tr>
    );
};

export default EachRow;