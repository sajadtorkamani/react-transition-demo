import React from 'react'

const ContactTab: React.FC = () => (
  <>
    <h2>Contacts</h2>
    <div className="d-flex flex-wrap">
      {new Array(100).fill('x').map((_el, index) => (
        <div key={index} style={{ fontSize: '50px' }}>
          🎈
        </div>
      ))}
    </div>
  </>
)
export default ContactTab
