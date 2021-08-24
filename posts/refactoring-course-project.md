---
title: 'Refactoring A Course Project'
date: '2021-08-24'
excerpt: 'This is a manually generated excerpt to appear below the title on the blog index page.'
---

Online courses about web development are usually built around a master project where the student codes along with the instructor. These tutorials are a great way to learn a new language or framework, however nothing beats having to find, by yourself, the solutions to the problems you encounter in your own projects.

Having said that, coming up with a full project on your own, from the topic, the architecture, the content, the visual assets, to the styles, can be an overwhelming task when the main goal is to write some React components together with some Redux code.

To get the best of both worlds, I went back to a code-along project from a full React Senior Developer course that I had already completed about a year before. And I made some significant changes that would deviate far enough from the instructor’s code that I would have to implement my own solutions, relying on the official documentation instead of the solution code.

At the same time keeping the same app structure, styles, and various assets from the course, to focus on the React / Redux core of the project. The result is visually very similar, but the code is not.

This article highlights some of the key differences between my code and the original implementation from the course.

## React with Next.js

The course teaches how to build a React project using the Create-React-App tool. I instead chose to go with Next.js for this project. Some of the reasons for this choice are:

- I wanted to become more familiar with this framework as its popularity keeps growing,
- I had already completed many React projects using CRA,
- It would give me the opportunity to solve some issues on my own, without the possibility to rely on the instructor’s code.

## Redux Toolkit

To teach how Redux works in depth, introducing each concept one after the other, all of the Redux logic in the course is written “by hand.” I instead used Redux Toolkit, which is the way of creating a Redux store that is recommended for production quality code. This allows for less verbose code while making sure all the right middleware is included out of the box.

## Styled Components

The course does teach about CSS-in-JS and Styled Components, although it comes as an optional refactor from using SASS to Styled Components after the deployment of the site. Instead of re-using the instructor’s css files, I chose to write all styles using the styled-components library from the beginning.

My personal convention when using Styled Components is to create an object named S, below the exported component, in the same file, and add each style as a property to this S object, like S.Container, or S.Title. This allows me to easily distinguish between components imported from other files from the styled elements that compose the component I am working on.
