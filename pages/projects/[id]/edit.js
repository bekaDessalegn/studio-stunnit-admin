import Navbar from '../../../components/navbar'
import EditProject from '../../../components/edit-project'
import img1 from '../../../public/images/Asset_14.png'
import img2 from '../../../public/images/Asset_16.png'
import img3 from '../../../public/images/Asset_20.png'

export default function editProject({project}) {
        return <>
                        <main className='' >
                                <Navbar />
                                <EditProject project={project} />
                        </main>
                </>
}

export async function getStaticPaths() {
    // Fetch the list of item IDs from an API or database
    const ids = [1, 2, 3, /* ... */, 100];
  
    // Map the IDs to the required format for Next.js dynamic routes
    const paths = ids.map((id) => ({
      params: { id: id.toString()},
    }));
  
    return { paths, fallback: true };
  }

export async function getStaticProps({ params }) {
    console.log(params)
    // Fetch the item data for the specified ID from an API or database
    const projects = [
        {
            id: 1,
            title: "Arnua Project",
            primaryImage: img1,
            imageUrl: [img2, img1, img3],
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. QUICK CONTACT Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse- quat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
            testimony: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit"
        },
        {
            id: 2,
            title: "Mr Murthy's Project",
            primaryImage: img1,
            imageUrl: [img2, img1, img3],
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. QUICK CONTACT Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse- quat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
            testimony: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit"
        },
        {
            id: 3,
            title: "Studio Stunnit Project",
            primaryImage: img1,
            imageUrl: [img2, img1, img3],
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. QUICK CONTACT Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse- quat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad",
            testimony: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit"
        },
    ];

    const project = projects.find( function (project) {
        return project.id.toString() === params.id;
    })
  
    return {
      props: {
        project,
      },
    };
  }

