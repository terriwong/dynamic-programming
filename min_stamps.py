def min_stamps_needed(stamp_types, n):

    # take care of edge case where n smaller than the cheapest stamp we have
    # here we use one of the cheapest stamp even if we will waste money
    if n < min(stamp_types):
        return 1

    else:

        # we make a list to hold the minimum number of stamps needed at every
        # total postage from 0 to n
        # starting each index with value 0
        min_stamps_needed_at_vals = [0] * (n + 1)

        for current_val in xrange(n + 1):

            # set a variable to hold the min stamps needed so far for current_val
            current_min_stamps_needed = 0

            for stamp_value in stamp_types:

                # if the current stamp valus is as much or less than the current_val
                # it's possible to get a better result by using this stamp
                if (stamp_value <= current_val):

                    min_stamps_needed_using_stamp = [stamp_value].extend(min_stamps_needed_at_vals[current_val - stamp_value])

                    current_min_stamps_needed = min(len(min_stamps_needed_using_stamp), len(current_min_stamps_needed))

            # update data with best case we can get so far
            min_stamps_needed_at_vals[current_val] = current_min_stamps_needed

        return min_stamps_needed_at_vals[n]