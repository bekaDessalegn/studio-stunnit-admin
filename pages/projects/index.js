import Navbar from '../../components/navbar'
import Head from 'next/head'
import AddProject from '../../components/add-project'
import ProjectsList from '../../components/projects_list'
import apiUrl from '../../config'
import { useEffect, useState } from 'react'

const projects = ({ projects }) => {
        const [allProjects, setAllProjects] = useState(projects)
        return <>
                <Head>
                        <title>Studio Stunnit Admin</title>
                        <meta name="description" content="This is the studio sunnit admin" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className='' >
                        <Navbar />
                        <ProjectsList projects={allProjects} />
                        <AddProject addProject={project => setAllProjects({ projects: [...allProjects.projects, project] })} />
                </main>
        </>
}

export default projects