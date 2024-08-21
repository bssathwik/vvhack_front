// src/ArticleList.js

import React from 'react';
import './articles.css';

const articles = [
  {
    id: 1,
    title: 'The Role of Goals and Stress Relief',
 
    content: `
What we experience as ‘stress’ is really an interaction of events that happen in our lives, our thoughts, and resulting emotional reactions to those events.

The way we perceive our stressors and our emotional responses to those perceptions are what trigger the body’s stress response. This results in the experience of stress.

Because of this, a significant goal of stress management focuses on examining our thoughts about our stressors. By doing this, we can then change our feelings and our stress responses. Another goal of stress management involves minimizing the stressors we experience in a typical day. Both goals are important and both require some forethought.`,
    author: 'Jane Doe',
  },
  {
    id: 2,
    title: 'The Role of Goals in Personal Happiness',
    content: `
Another area of life that’s closely linked with stress and stress management is personal happiness and fulfillment. The growing field of positive psychology examines what factors contribute to happiness and resilience (rather than just studying unhappiness and pathology).

This line of research has identified several goals that, if met, can lead to greater overall happiness, fulfillment, and resilience to stress. So, rather than only setting goals that minimize or manage stress, setting goals that lead to the opposite of stress can also be an effective route to a less-stressed lifestyle.`,
    author: 'John Smith',
  },
  {
    id: 3,
    title: 'The Role of Teamwork in Achieving Sports Success',
    content: `Teamwork is crucial for success in team sports. This article explores how effective communication, mutual respect, and understanding each player's role contribute to a team's success. It emphasizes the importance of building a positive team culture where all members feel valued and are motivated to work towards common goals. The piece also looks into strategies for improving teamwork, such as team-building exercises and clear goal setting.
`,
    author: 'Emily Johnson',
  },
  {
    id: 4,
    title: 'Mental Toughness in Sports: Psychological Strategies for Peak Performance',
    content: `This article examines the concept of mental toughness and its importance in sports. It discusses psychological strategies athletes can use to enhance their mental toughness, such as visualization, positive self-talk, and goal setting. The article also highlights the role of sports psychologists in helping athletes develop coping mechanisms for stress and pressure, thereby improving their overall performance.
`,
    author: 'Michael Brown',
  },
  {
    id: 5,
    title: 'The Winning Mindset: How Psychological Factors Influence Sports Success',
    content: `Winning in sports isn't just about physical abilities; the psychological mindset plays a significant role. This article delves into how confidence, focus, and resilience are critical for achieving success in sports. It covers various mental training techniques, including mindfulness and cognitive-behavioral approaches, that help athletes maintain focus and composure under pressure.
`,
    author: 'Sarah Wilson',
  },
  {
    id: 6,
    title: 'Leadership Dynamics in Sports Teams: Fostering a Winning Environment',
    content: `Effective leadership is essential for team cohesion and success. This article discusses different leadership styles in sports and their impact on team performance. It explores how coaches and team captains can inspire and motivate their teams, as well as the importance of leading by example. The article also touches on conflict resolution and decision-making processes within teams.`    ,
    author: 'David Miller',
  },
  {
    id: 7,
    title: 'Managing Stress in Competitive Sports: Psychological Approaches',
    content: `Competitive sports can be stressful, and managing that stress is key to performance. This article reviews different stress management techniques, such as relaxation exercises, time management, and mental rehearsal. It also covers how understanding and recognizing stressors can help athletes mitigate their impact, allowing for better focus and performance during competitions.`,
    author: 'Laura Garcia',
  },
];

const ArticleList = () => {
  return (
    <>
    <nav >
    <ul>
    <li><a className="a" href="/">Home</a></li>
          <li><a className="a" href="/videos">Videos</a></li>
          <li><a className="a" href="/booking">Coaching</a></li>
          <li><a className="a" href="/webinar">Courses</a></li>
          <li><a className="a" href="/exercises">exercise</a></li>
          <li><a className="a" href="/article">articel</a></li>
          <li><a className="a" href="/home">SignOut</a></li>
    </ul>
  </nav>
    <div className="article-list">
      {articles.map(article => (
        <div className="article-card" key={article.id}>
          <h2 className="article-title">{article.title}</h2>
          <p className="article-content">{article.content}</p>
          <p className="article-author">By {article.author}</p>
        </div>
      ))}
    </div>
    <section id="add-article">
                <h2>Add New Article</h2>
                <form >
                    <div>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                // value={newArticle.title}
                                // onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Content:
                            <textarea
                                name="content"
                                // value={newArticle.content}
                                // onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button type="submit" href='/signup'><a href="/register" >Add Article</a></button>
                </form>
            </section>

      </>
  );
};
 
    export default ArticleList;
