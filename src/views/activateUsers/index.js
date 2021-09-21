import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import _ from "lodash";
import React from "react";
import { useHistory } from "react-router";
import useActivateUsers from "./hook";

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
  }))(TableRow);

const ActivateUsers = () => {
    const { users, handlerSuccess, handlerDelete, roles, accessToken } = useActivateUsers();

    const history = useHistory();

    if(accessToken === undefined){
        history.push('/iniciar-sesion');
    }else if(roles[0] !== 'Admin'){
        history.push('/');
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg" style={{ padding: '50px 0px' }}>
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead>
                            <TableCell align="center">Nombres</TableCell>
                            <TableCell align="center"q>Correo Electronico</TableCell>
                            <TableCell align="center">Especialidad</TableCell>
                            <TableCell align="center">Trabajo</TableCell>
                            <TableCell align="center">Aprobar</TableCell>
                            <TableCell align="center">Eliminar</TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                _.map(users, (item, index) => (
                                    <StyledTableRow key={index}>
                                        <TableCell align="center">{item.fullname}</TableCell>
                                        <TableCell align="center">{item.email}</TableCell>
                                        <TableCell align="center">{item.speciality}</TableCell>
                                        <TableCell align="center">{item.work_location}</TableCell>
                                        <TableCell align="center">
                                            <Button><img src="/images/success.png" alt="Success's Icon" width="30" onClick={() => handlerSuccess(item.id)}/></Button>
                                            <Button><img src="/images/error.png" alt="Error's Icon" width="30" onClick={() => handlerDelete(item.id)} /></Button>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button>
                                                <img src="/images/delete.png" alt="Delete's Icon" width="20" onClick={() => handlerDelete(item.id)}/>
                                            </Button>
                                        </TableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>
    );
}

export default ActivateUsers;