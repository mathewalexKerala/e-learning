import React from 'react';
import './HomeBody.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const HomeBody = () => {
    return (
        <div className='body'>
            <div className='first-section' style={{ width: '25%', height: '100%', backgroundColor: 'gray' }}>
                <div className='first_link'>
                    <h1>Tutor Page</h1>
                </div>

            </div>
            <div className='second-section'>
                <div className='second-section-header'>
                    <h1 style={{marginLeft:'70px',fontSize:'50px'}}>Courses</h1>
                    <div className='second-section-last'>
                        <div>

                        <Search2Icon/>
                        <input style={{marginBottom:'20px',borderRadius:'20%'}} type='text' placeholder='searc courses...' />
                        </div>
                        <Button colorScheme='green'>Add courses</Button>

                    </div>
                </div>

                <TableContainer style={{marginLeft:'40px'}}>
                    <Table variant='striped'>
                        
                        <Thead>
                            <Tr>
                                <Th>NAME</Th>
                                <Th>Description</Th>
                                <Th>price</Th>
                                <Th>Actions</Th>
                                
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>ReactJS</Td>
                                <Td>FrontEnd React</Td>
                                <Td >2500</Td>
                                <Td > 
                                
                                 <Button colorScheme='blue'>More Info</Button>
                                <Button colorScheme='green'>Edit</Button>
                                <Button colorScheme='red'>Block</Button>
                                </Td>
                                
                            </Tr>
                            <Tr>
                            
                            <Td>ReactJS</Td>
                                <Td>FrontEnd React</Td>
                                <Td >2500</Td>
                                <Td> <Button colorScheme='blue'>More Info</Button>
                                <Button colorScheme='green'>Edit</Button>
                                <Button colorScheme='red'>Block</Button>
                                </Td>
                            </Tr>
                            <Tr>
                            
                            <Td>ReactJS</Td>
                                <Td>FrontEnd React</Td>
                                <Td >2500</Td>
                                <Td> <Button colorScheme='blue'>More Info</Button>
                                <Button colorScheme='green'>Edit</Button>
                                <Button colorScheme='red'>Block</Button>
                                </Td>
                               
                            </Tr>
                            <Tr>
                               
                            <Td>ReactJS</Td>
                                <Td>FrontEnd React</Td>
                                <Td >2500</Td>
                                <Td> <Button colorScheme='blue'>More Info</Button>
                                <Button colorScheme='green'>Edit</Button>
                                <Button colorScheme='red'>Block</Button>
                                </Td>
                                
                            </Tr>
                            <Tr>
                               
                            <Td>ReactJS</Td>
                                <Td>FrontEnd React</Td>
                                <Td >2500</Td>
                                <Td> <Button colorScheme='blue'>More Info</Button>
                                <Button colorScheme='green'>Edit</Button>
                                <Button colorScheme='red'>Block</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                
                            <Td>ReactJS</Td>
                                <Td>FrontEnd React</Td>
                                <Td >2500</Td>
                                <Td> <Button colorScheme='blue'>More Info</Button>
                                <Button colorScheme='green'>Edit</Button>
                                <Button colorScheme='red'>Block</Button>
                                </Td>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer> 
            </div>

        </div>
    );
}

export default HomeBody;
