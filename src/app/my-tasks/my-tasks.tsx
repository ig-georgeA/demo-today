import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCalendar, IgrCalendarModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './my-tasks.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCalendarModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function MyTasks() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout my-tasks-container")}>
        <div className={classes("column-layout my-tasks")}>
          <div className={classes("row-layout group")}>
            <div className={classes("row-layout left")}>
              <IgrAvatar src="/src/assets/9626ec70008b72fc1de4d9d5fb12e58e244ef28d.png" shape="circle" className={classes("avatar avatar_1")}></IgrAvatar>
              <IgrButton variant="flat" type="button" className={classes("button button_1")}>
                <span key={uuid()}>Home</span>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_down</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
            <div className={classes("row-layout right")}>
              <IgrButton variant="flat" type="button" className={classes("button button_2")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>Task</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <span className={classes("material-icons icon_2")}>
                <span key={uuid()}>notifications</span>
              </span>
              <span className={classes("material-icons icon_2")}>
                <span key={uuid()}>mode_comment</span>
              </span>
              <IgrAvatar src="/src/assets/2f91341bb08e6a66e2148044ca65e7ddeb74bfe2.png" shape="circle" className={classes("avatar avatar_2")}></IgrAvatar>
            </div>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrNavDrawer position="relative" className={classes("nav-drawer")}>
              <div slot="mini" key={uuid()}>
                <IgrNavDrawerItem className={classes("nav-drawer-item")} key={uuid()}>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("imx-icon imx-check_box icon_3")} key={uuid()}></span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
                <IgrNavDrawerItem className={classes("nav-drawer-item")} key={uuid()}>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>dashboard</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
                <IgrNavDrawerItem className={classes("nav-drawer-item")} key={uuid()}>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>directions</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <IgrNavDrawerItem className={classes("nav-drawer-item")} key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("imx-icon imx-check_box icon_3")} key={uuid()}></span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Title goes here</div>
              </IgrNavDrawerItem>
              <IgrNavDrawerItem className={classes("nav-drawer-item")} key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_4")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Title goes here</div>
              </IgrNavDrawerItem>
              <IgrNavDrawerItem className={classes("nav-drawer-item")} key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_4")} key={uuid()}>
                    <span key={uuid()}>directions</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Title goes here</div>
              </IgrNavDrawerItem>
            </IgrNavDrawer>
            <div className={classes("column-layout group_2")}>
              <h6 className={classes("title")}>
                <span>Tasks</span>
              </h6>
              <p className={classes("typography__body-1 subtitle")}>
                <span>My tasks</span>
              </p>
              <div className={classes("column-layout lists")}>
                <p className={classes("typography__subtitle-2 subtitle")}>
                  <span>LISTS</span>
                </p>
                <IgrList className={classes("list")}>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>General</div>
                    <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>more_vert</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>App Builder</div>
                    <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>more_vert</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>Indigo.Design</div>
                    <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>more_vert</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>Marketing</div>
                    <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>more_vert</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>Customer Portal</div>
                    <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>more_vert</span>
                    </span>
                  </IgrListItem>
                </IgrList>
                <IgrButton variant="flat" type="button" className={classes("button button_3")}>
                  <span className={classes("material-icons icon_5")} key={uuid()}>
                    <span key={uuid()}>add</span>
                  </span>
                  <span key={uuid()}>LIST</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div className={classes("column-layout lists")}>
                <p className={classes("typography__subtitle-2 subtitle")}>
                  <span>FILTERS</span>
                </p>
                <IgrList className={classes("list")}>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>Due this Week</div>
                    <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>more_vert</span>
                    </span>
                  </IgrListItem>
                  <IgrListItem key={uuid()}>
                    <div slot="title" key={uuid()}>Overdue</div>
                    <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                      <span key={uuid()}>more_vert</span>
                    </span>
                  </IgrListItem>
                </IgrList>
                <IgrButton variant="flat" type="button" className={classes("button button_4")}>
                  <span className={classes("material-icons icon_5")} key={uuid()}>
                    <span key={uuid()}>add</span>
                  </span>
                  <span key={uuid()}>FILTER</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <div className={classes("column-layout group_3")}>
              <div className={classes("row-layout group_4")}>
                <div className={classes("column-layout left_1")}>
                  <h5 className={classes("title_1")}>
                    <span>VD Team</span>
                  </h5>
                </div>
                <div className={classes("row-layout right_1")}>
                  <IgrButton variant="flat" type="button" className={classes("button button_5")}>
                    <span className={classes("material-icons icon_5")} key={uuid()}>
                      <span key={uuid()}>list</span>
                    </span>
                    <span key={uuid()}>list</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" type="button" className={classes("button button_6")}>
                    <span className={classes("material-icons icon_5")} key={uuid()}>
                      <span key={uuid()}>dashboard</span>
                    </span>
                    <span key={uuid()}>section</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" type="button" className={classes("button button_7")}>
                    <span className={classes("material-icons icon_5")} key={uuid()}>
                      <span key={uuid()}>notifications</span>
                    </span>
                    <span key={uuid()}>fields</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrIconButton variant="flat" className={classes("button_10")}>
                    <span className={classes("material-icons icon_5")} key={uuid()}>
                      <span key={uuid()}>filter_list</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                  <IgrIconButton variant="flat" className={classes("button_10")}>
                    <span className={classes("material-icons icon_5")} key={uuid()}>
                      <span key={uuid()}>more_vert</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </div>
              <div className={classes("row-layout group_5")}>
                <div className={classes("column-layout group_6")}>
                  <div className={classes("column-layout group_7")}>
                    <div className={classes("column-layout title-subtitle")}>
                      <h6 className={classes("content")}>
                        <span>Developer Tools</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 content")}>
                        <span>Release 2020.2</span>
                      </p>
                    </div>
                    <IgrList className={classes("list_1")}>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/f3048032ae6a736aed334557042b9c843adceec5.png" shape="circle" className={classes("avatar avatar_3")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Download any Ultimate product and take notes on the download process</div>
                        <div slot="subtitle" key={uuid()}>Product download process experience</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>more_vert</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/abfb25210a63886b5068398373c4cb3632ee2124.png" shape="circle" className={classes("avatar avatar_4")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Report about the downloaded ultimate products to the Marketing Team</div>
                        <div slot="subtitle" key={uuid()}>Product download process experience</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>more_vert</span>
                        </span>
                      </IgrListItem>
                    </IgrList>
                    <IgrButton variant="flat" type="button" className={classes("button button_8")}>
                      <span className={classes("material-icons icon_5")} key={uuid()}>
                        <span key={uuid()}>add</span>
                      </span>
                      <span key={uuid()}>Task</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                  <div className={classes("column-layout group_7")}>
                    <div className={classes("column-layout title-subtitle_1")}>
                      <h6 className={classes("content")}>
                        <span>App Builder</span>
                      </h6>
                      <p className={classes("typography__subtitle-2 content")}>
                        <span>September release - Sprint 1</span>
                      </p>
                    </div>
                    <IgrList className={classes("list_1")}>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/0f4c341fc5986571d2d7acab474c618a1a5ba5be.png" shape="circle" className={classes("avatar avatar_5")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Research new sample app</div>
                        <div slot="subtitle" key={uuid()}>New sample application</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>more_vert</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/abfb25210a63886b5068398373c4cb3632ee2124.png" shape="circle" className={classes("avatar avatar_6")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Create visual design for new sample app</div>
                        <div slot="subtitle" key={uuid()}>New sample application</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>more_vert</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/661e602ad3b1b3ee7c58be35dde4d79ee23c075f.png" shape="circle" className={classes("avatar avatar_7")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Implementation for new sample app</div>
                        <div slot="subtitle" key={uuid()}>New sample application</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>more_vert</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/4ccf2e56011fd84dd87418d3f1cdb55db2e3c9ce.png" shape="circle" className={classes("avatar avatar_8")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Tweaks in List component</div>
                        <div slot="subtitle" key={uuid()}>App Builder UI Components\</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>more_vert</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/f3048032ae6a736aed334557042b9c843adceec5.png" shape="circle" className={classes("avatar avatar_9")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>QE of new App Builder components</div>
                        <div slot="subtitle" key={uuid()}>App Builder UI Components</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>more_vert</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/3f2551531f56cef2d7a0f1a77b2cca47aadbd391.png" shape="circle" className={classes("avatar avatar_10")} key={uuid()}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Implementation of Chips component</div>
                        <div slot="subtitle" key={uuid()}>App Builder UI Components</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>more_vert</span>
                        </span>
                      </IgrListItem>
                    </IgrList>
                    <IgrButton variant="flat" type="button" className={classes("button button_9")}>
                      <span className={classes("material-icons icon_5")} key={uuid()}>
                        <span key={uuid()}>add</span>
                      </span>
                      <span key={uuid()}>Task</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
                <div className={classes("column-layout group_8")}>
                  <IgrCalendar showWeekNumbers="true" hideHeader="Horizontal" headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
                  <div className={classes("column-layout release-calendar")}>
                    <h6 className={classes("title_2")}>
                      <span>Release Calendar</span>
                    </h6>
                    <IgrList className={classes("list_1")}>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar className={classes("avatar avatar_11")} key={uuid()}>
                            <span className={classes("material-icons icon_6")} key={uuid()}>
                              <span key={uuid()}>android</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>App Builder</div>
                        <div slot="subtitle" key={uuid()}>Product download process experience</div>
                        <span slot="end" className={classes("material-icons icon_7")} key={uuid()}>
                          <span key={uuid()}>check_circle</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div slot="start" key={uuid()}>
                          <IgrAvatar className={classes("avatar avatar_12")} key={uuid()}>
                            <span className={classes("material-icons icon_6")} key={uuid()}>
                              <span key={uuid()}>android</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Ultimate Products Review</div>
                        <div slot="subtitle" key={uuid()}>08.12.2020</div>
                        <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                          <span key={uuid()}>error</span>
                        </span>
                      </IgrListItem>
                    </IgrList>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
