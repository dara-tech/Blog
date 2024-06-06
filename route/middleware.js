import express from 'express';

export let userIsAuthorised = false;

export function authenticationCheck(req, res, next) {
    const { username, password } = req.body;
    
    if (username === process.env.USERNAME && password === process.env.PASSWORD) {
      userIsAuthorised = true;
      next();
    } else {
      if (username !== process.env.USERNAME) {
        res.render("signin", { error: "Wrong username" });
      } else {
        res.render("signin", { error: "Wrong password" });
      }
    }
}

export function bandNameGenerator(req, res, next) {
    const title = req.body["title"] ?? "";
    const content = req.body["content"] ?? "";
    const post = title + content;
    console.log("Generated post content:", post);
    res.locals.post = post;
    next();
}
