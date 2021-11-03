import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ListItems from './ListItems'


library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
      }
    })
    this.setState({
      items: items
    })


  }
  render() {
    return (
      <>
        <div className='container-fluid '>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid btn btn-success">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" style={{ 'marginLeft': '50px' }} aria-current="page" href="#">Feed</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" style={{ 'marginLeft': '30px' }} href="#">Communication</a>
                  </li>
                </ul>
                <a className="navbar-brand" style={{ 'textAlign': 'center', 'marginRight': '420px' }} href="#">HealthNest</a>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-dark" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className='col-lg-4' style={{ 'backgroundColor': 'lightgreen' }}>
              <h4>Patient </h4>
              <h6>DIAGNOSED RECENTLY</h6>
            </div>
            <div className='col-lg-8'style={{ 'backgroundColor': 'lightblue' }}>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-Post-tab" data-bs-toggle="pill" data-bs-target="#pills-Post" type="button" role="tab" aria-controls="pills-Post" aria-selected="true">Post</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="truenpm">Ask Question</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Poll</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Event</button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-Posts" role="tabpanel" aria-labelledby="pills-Posts-tab">
                  <form id="to-do-form" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
                    <button type="submit">Add</button>
                  </form>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
              </div>
            </div>
          </div>

        </div>
       <hr />
        <div className="container-fluid" >
          <div className="row">
            <div className='col-lg-4' style={{ 'backgroundColor': 'lightgreen' }}>
              <h4>Library</h4>
              <p>My Bookmarks</p>
              <p>News and Articles</p>
              <p>FAQs</p>
              <p>Events</p>
            </div>
            <div className='col-lg-8'>
              <div className='container-fluid' style={{ 'backgroundColor': 'lightblue' }}>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-Post-tab" data-bs-toggle="pill" data-bs-target="#pills-Post" type="button" role="tab" aria-controls="pills-Post" aria-selected="true"> All Post</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-News-tab" data-bs-toggle="pill" data-bs-target="#pills-News" type="button" role="tab" aria-controls="pills-News" aria-selected="truenpm">News</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Diet-tab" data-bs-toggle="pill" data-bs-target="#pills-Diet" type="button" role="tab" aria-controls="pills-Diet" aria-selected="false">Diet</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Lifestyle-tab" data-bs-toggle="pill" data-bs-target="#pills-Lifestyle" type="button" role="tab" aria-controls="pills-Lifestyle" aria-selected="false">Lifestyle</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-Symptoms-tab" data-bs-toggle="pill" data-bs-target="#pills-Symptoms" type="button" role="tab" aria-controls="pills-Symptoms" aria-selected="false">Symptoms</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tab-content">
                <div className="tab-pane fade" id="pills-Post" role="tabpanel" aria-labelledby="pills-Post-tab">
                  
                    <p>{this.state.items.text}</p>

                    <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
                  </div>
                  <div className="tab-pane fade" id="pills-News" role="tabpanel" aria-labelledby="pills-News-tab">news</div>
                  <div className="tab-pane fade" id="pills-Diet" role="tabpanel" aria-labelledby="pills-Diet-tab">diet</div>
                  <div className="tab-pane fade" id="pills-Lifestyle" role="tabpanel" aria-labelledby="pills-Lifestyle-tab">Lifestyle</div>
                  <div className="tab-pane fade" id="pills-Symptoms" role="tabpanel" aria-labelledby="pills-Symptoms-tab">symptoms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default App;