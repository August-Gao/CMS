'use strict';
const Controller = require('egg').Controller;
const _ = require('lodash');
const shortid = require('shortid');

class AboutController extends Controller {
  async getDataForContact() {
    const ctx = this.ctx;
    ctx.tempPage = '/contact-us.html';
    ctx.pageType = 'contact';
    await ctx.getPageData();
  }

  async getDataForAbout() {
    const ctx = this.ctx;

 

    ctx.tempPage = '/about-us.html';
    ctx.pageType = 'about-us';
    await ctx.getPageData();
  }
  async getDataForComment() {
    const ctx = this.ctx;

    ctx.tempPage = '/reviews.html';
    await ctx.getPageData();
  }
  async getDataForBlog() {
    const ctx = this.ctx;

    ctx.tempPage = '/blog-grid.html';
    await ctx.getPageData();
  }
}

module.exports = AboutController;
