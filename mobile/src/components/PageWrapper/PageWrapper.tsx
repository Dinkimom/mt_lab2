import React, { ReactNode, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface Props {
  children: ReactNode;
}

export const PageWrapper: React.FC<Props> = ({ children }) => {
  const { user } = useSelector((state: RootState) => state.account);

  const dispatch = useDispatch();

  // const handleLogout = () => {
  //   if (window.confirm('Do you want to logout?')) {
  //     dispatch(logout());
  //   }
  // };

  const PopoverContent = useMemo(() => {
    if (!user) {
      return null;
    }

    return (
      <>
        {/* <div>
        <h3>
          {user.name}: {user.email}
        </h3>

        <p>{user.phone}</p>
        <UpdateForm />
        <Button block onClick={handleLogout}>
          Logout
        </Button>
      </div> */}
      </>
    );
  }, [user]);

  return (
    <>
      {children}
      {/* <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Container className={styles.headerContainer}>
          <Link to="/">Home</Link>

          <div>
            <Link to="/dates">My dates</Link>

            <Popover content={PopoverContent} trigger="focus">
              <Button
                type="primary"
                shape="circle"
                className={styles.userButton}
              >
                <UserOutlined />
              </Button>
            </Popover>
          </div>
        </Container>
      </Header>
      <Content className={styles.content}>
        <Container>{children}</Container>
      </Content>
      <Footer className={styles.footer}>
        <Container>Web Maker ©2020 Created by Nikita Dmitriev</Container>
      </Footer>
    </Layout> */}
    </>
  );
};
