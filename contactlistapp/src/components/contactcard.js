import React from 'react'
import { Card } from 'antd';

 const contactcard=({contact})=> {
    return (<div>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>{contact.name}</p>
      <p>{contact.age}</p>
      <p>{contact.email}</p>
    </Card>
  </div>
 
)};
    
export default contactcard;