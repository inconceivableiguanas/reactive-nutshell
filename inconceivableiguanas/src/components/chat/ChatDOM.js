import React from "react"
import { Link } from "react-router-dom"
import "bulma/css/bulma.css";
import { CardContent} from 'bloomer';
import { Content } from "bloomer/lib/elements/Content";


export default props => {
        const secStyle= {
            border: '1px solid lightslategrey'
        }
        
            return (
                
                <React.Fragment>
            <section style = {secStyle} id = {props.chat.id}>
            <CardContent>
                <Content>
                <p>User Id {props.chat.userId}</p>

                <h3 className="card-text">{props.chat.message}</h3>
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/chat/${props.chat.id}/edit`,
                        state: { chat: props.chat }
                    }}>
                        Edit
                    </Link>
                    }
                </Content>
                </CardContent>
            </section>
            
        </React.Fragment>
            )
        }
    