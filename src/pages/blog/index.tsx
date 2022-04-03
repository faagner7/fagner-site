import Head from 'next/head'
import Link from 'next/link'

import React from 'react'

import { Grid, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { usePostsQuery } from '../../generated/graphql'

import styles from '../../styles/blog'

const useStyles = makeStyles(styles)

export default function Blog() {
  const [{ data }] = usePostsQuery()
  const classes = useStyles()
  console.log('data', data)
  return (
    <>
      <Head>
        <title>fagner.rodrigues - Blog</title>
      </Head>
      <Grid container>
        <Grid item xs={12}>
          <h1>Blog</h1>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {data?.posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} passHref>
                  <Paper elevation={3} className={classes.paper}>
                    <a target='_blank' rel='noopener noreferrer'>
                      <h3>{post.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `<p> ${post.excerpt} </p>`,
                        }}
                      />
                      {post.tags.join(', ')}
                    </a>
                  </Paper>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
