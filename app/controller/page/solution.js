'use strict';
const Controller = require('egg').Controller;
const _ = require('lodash');
const shortid = require('shortid');

class SolutionController extends Controller {
  async getDataForSolution() {
    const ctx = this.ctx;
    ctx.tempPage = '/solution.html';
    ctx.pageType = 'solution';
    await ctx.getPageData();
  }

}

module.exports = SolutionController;
