import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './dashboard.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function Dashboard() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout dashboard-container")}>
        <div className={classes("column-layout dashboard")}>
          <div className={classes("row-layout group")}>
            <div className={classes("row-layout left")}>
              <IgrAvatar src="/src/assets/9626ec70008b72fc1de4d9d5fb12e58e244ef28d.png" shape="circle" className={classes("avatar")}></IgrAvatar>
              <IgrButton variant="flat" type="button" className={classes("button button_2")}>
                <span key={uuid()}>Home</span>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_down</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
            <div className={classes("row-layout right")}>
              <IgrButton variant="flat" type="button" className={classes("button button_3")}>
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
              <IgrAvatar src="/src/assets/2f91341bb08e6a66e2148044ca65e7ddeb74bfe2.png" shape="circle" className={classes("avatar")}></IgrAvatar>
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
                    <span className={classes("material-icons icon_3")} key={uuid()}>
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
                  <span className={classes("material-icons icon_3")} key={uuid()}>
                    <span key={uuid()}>directions</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Title goes here</div>
              </IgrNavDrawerItem>
            </IgrNavDrawer>
            <div className={classes("column-layout group_2")}>
              <h6 className={classes("title")}>
                <span>Dashboard</span>
              </h6>
              <IgrList className={classes("list")}>
                <IgrListItem key={uuid()}>
                  <div slot="title" key={uuid()}>Dashboard</div>
                  <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div slot="title" key={uuid()}>Favorites</div>
                  <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                    <span key={uuid()}>star</span>
                  </span>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div slot="title" key={uuid()}>Recent</div>
                  <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                    <span key={uuid()}>access_time</span>
                  </span>
                </IgrListItem>
                <IgrListItem key={uuid()}>
                  <div slot="title" key={uuid()}>Samples</div>
                  <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                    <span key={uuid()}>web</span>
                  </span>
                </IgrListItem>
              </IgrList>
            </div>
            <div className={classes("column-layout group_3")}>
              <div className={classes("column-layout group_4")}>
                <h5 className={classes("title_1")}>
                  <span>Recent</span>
                </h5>
                <div className={classes("row-layout cards")}>
                  <IgrCard className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/c6791f1a298d252eb15d53438d81a5b197b6b75e.png" className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Artists Analysis</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>Jun 15, 2020 - Jason Anderson</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat" className={classes("button_4")}>
                          <span className={classes("material-icons icon_5")} key={uuid()}>
                            <span key={uuid()}>star_border</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat" className={classes("button_4_1")}>
                          <span className={classes("imx-icon imx-share icon_5")} key={uuid()}></span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div slot="end" key={uuid()}></div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/c0b26fee91c2daa88ea0d257d370af30bee4bab3.png" className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>For evaluation</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>Jun 15, 2020 - Martina Roberts</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat" className={classes("button_5 button_5_1")}>
                          <span className={classes("material-icons icon_5")} key={uuid()}>
                            <span key={uuid()}>star</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat" className={classes("button_5 button_5_2")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>share</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div slot="end" key={uuid()}></div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard className={classes("card")}>
                    <IgrCardMedia className={classes("media-content")} key={uuid()}>
                      <img src="/src/assets/c6791f1a298d252eb15d53438d81a5b197b6b75e.png" className={classes("image")} key={uuid()} />
                    </IgrCardMedia>
                    <IgrCardHeader key={uuid()}>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>Stylescape Results</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>Jun 15, 2020 - Caroline Sanders</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardActions className={classes("actions-content")} key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat" className={classes("button_5 button_5_3")}>
                          <span className={classes("material-icons icon_5")} key={uuid()}>
                            <span key={uuid()}>star_border</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrIconButton variant="flat" className={classes("button_5 button_5_4")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>share</span>
                          </span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrIconButton>
                      </div>
                      <div slot="end" key={uuid()}></div>
                    </IgrCardActions>
                  </IgrCard>
                </div>
              </div>
              <IgrButton variant="fab" className={classes("button_1 button_1_1")}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
