import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import userInfo from 'backend/user.json';
import statistics from 'backend/statistics-data.json';
import friends from 'backend/friends.json';
import transactions from 'backend/transactions.json';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Profile user={userInfo} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </ThemeProvider>
  );
};
