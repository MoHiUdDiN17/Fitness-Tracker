import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import EachRow from './EachRow';
import Calculation from '../Calculation/Calculation';
import HighestScore from '../HighestScore/HighestScore';
const Table = () => {
    const [asc, setAsc] = useState(true);
    const [sortedRankingData, setSortedRankingData] = useState([]);
    const { data: persons, isLoading } = useQuery({
        queryKey: ['api/v1/leaderboard/users'],
        queryFn: async () => {
            const res = await fetch('https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users')
            const data = await res.json();
            setSortedRankingData(data);
            return data
        }
    })
    const sortRankingData = usersData => {
        const temp = [...usersData];
        temp.sort((a, b) => (asc ? a.score - b.score : b.score - a.score));
        setSortedRankingData(temp);
        setAsc(!asc);
    };
    const searchRankingData = event => {
        const temp = [...persons];
        event.preventDefault();
        const form = event.target;
        const message = form.value;
        const filteredUser = temp.filter(element => {
            const userName = element?.name?.toLowerCase();
            const value = userName.search(message);
            const country = element?.country?.toLowerCase();
            const value1 = country.search(message);
            return (!value || !value1);
        })
        setSortedRankingData(filteredUser);
    }
    console.log(persons)
    return (
        <div id='Table'>
            <div className='flex justify-center items-center'>
            <input name="message" type="text" id="myInput" className="shadow my-5 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={searchRankingData} placeholder="Search for Names or Country.."></input>
            </div>

            <section>
                <div className='flex justify-center items-center'>
                    {(persons?.length ?? 0) <= 0 ? (
                        <div className='w-full h-20 flex justify-center items-center'>
                            Loading...
                        </div>
                    ) : (
                        <table className='w-2/3 max-auto'>
                            <thead className='bg-sky-100'>
                                <tr className=''>
                                    <th className='p-3 text-start'>Id</th>
                                    <th className='p-3 text-start'>Photo</th>
                                    <th className='p-3 text-start'>Name</th>
                                    <th className='p-3 text-start'>Country
                                    </th>
                                    <th
                                        onClick={() => sortRankingData(persons)}
                                        id='score_column'
                                        class='flex justify-start items-center gap-4 p-3 text-start cursor-pointer'>
                                        <span>Score</span>
                                        <Icon
                                            className={`${!asc ? '' : 'rotate-180'}`}
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                {sortedRankingData?.map((userData, index) => {
                                    return (
                                        <EachRow index={index} userData={userData} />
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>
            {
                <HighestScore persons={persons}></HighestScore>
            }
            {
                <Calculation persons={persons}></Calculation>
            }
        </div>
    );
};

export default Table;