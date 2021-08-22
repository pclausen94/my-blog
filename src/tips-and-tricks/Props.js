// First component, return a component and take in a prop:
// <Component your_own_name={props} />
// Example: <BlogList blogs={blogs} title={'This is the title'} />

// Second component, export a component(function) and define the prop:

// classic example
// export default function(props) {
//   const variable_name = props.name_of_prop;
// Your code... }

// destructered example
// export default function your_function_name({ name_of_prop }) {your code...}

// In practice - classic:
// export default function Props( blogs ) {
//  const blogs = props.blogs;
//   return (
//     <div>
//       <div className="home">
//         {blogs.map((blog) => (
//           <div className="blog-preview" key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>Written by {blog.author}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// In practice - destructered:
// export default function Props({blogs, title}) {
//   return (
//     <div>
//       <div className="home">
//          <h1>{ title }</h1>
//         {blogs.map((blog) => (
//           <div className="blog-preview" key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>Written by {blog.author}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
